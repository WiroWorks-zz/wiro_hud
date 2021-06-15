ESX = nil
Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj)
            ESX = obj
        end)
        Citizen.Wait(0)
    end
end)

local aracici = false
local currentVehicle = nil

Citizen.CreateThread(function()
    while true do

        if (not IsPedInAnyVehicle(PlayerPedId(), false) )then
            DisplayRadar(0)
            SendNUIMessage({
                type = 'arac',
                bool = false,
            }) 
            aracici = false
        else
            DisplayRadar(1)
            if GetPedInVehicleSeat(GetVehiclePedIsIn(PlayerPedId(), false), 1) then
                SendNUIMessage({
                    type = 'arac',
                    bool = true,
                })
                currentVehicle = GetVehiclePedIsIn(PlayerPedId(), false)
                if aracici == false then 
                    dongugobrr()
                    dongu2gobrr() 
                end
                aracici = true
            end
        end
        
        TriggerEvent('esx_status:getStatus', 'hunger', function(hunger)
            TriggerEvent('esx_status:getStatus', 'thirst', function(thirst)
                
                SendNUIMessage({
                    type = "updateStatusHudOthers",
                    hunger = (hunger.getPercent() / 2.6),
                    thirst = (thirst.getPercent() / 2.6),
                })
            end)
        end)
        Citizen.Wait(5000)

    end
end)

function dongugobrr() 
    Citizen.CreateThread(function()
        while aracici do
            aga, ligh, lights = GetVehicleLightsState(currentVehicle)
            Citizen.Wait(50)
            SendNUIMessage({
                type = 'aracOthers',
                speed = GetEntitySpeed(currentVehicle) * 3.6,
                fuel = GetVehicleFuelLevel(currentVehicle) / 2.6,
                engine = GetIsVehicleEngineRunning(currentVehicle),
                light = lights,
            })
        end
    end)
end

function dongu2gobrr() 
    local vehicleSignalIndicator = 'off'
    Citizen.CreateThread(function()
        while aracici do
            -- Vehicle Signal Lights
            Citizen.Wait(1)
            if IsControlJustPressed(1, 174) then
                if vehicleSignalIndicator == 'off' then
                    vehicleSignalIndicator = 'left'
                else
                    vehicleSignalIndicator = 'off'
                end

                TriggerEvent('wiro_hud:setCarSignalLights', vehicleSignalIndicator)
            end

            if IsControlJustPressed(1, 175) then
                if vehicleSignalIndicator == 'off' then
                    vehicleSignalIndicator = 'right'
                else
                    vehicleSignalIndicator = 'off'
                end

                TriggerEvent('wiro_hud:setCarSignalLights', vehicleSignalIndicator)
            end

            if IsControlJustPressed(1, 173) then
                if vehicleSignalIndicator == 'off' then
                    vehicleSignalIndicator = 'both'
                else
                    vehicleSignalIndicator = 'off'
                end

                TriggerEvent('wiro_hud:setCarSignalLights', vehicleSignalIndicator)
            end
        end
    end)
end

RegisterNetEvent("wiro_hud:setCarSignalLights")
AddEventHandler("wiro_hud:setCarSignalLights", function(indexx)
    SendNUIMessage({
        type = 'sinyal',
        index = indexx,
    })
end)

Citizen.CreateThread(function()
    while true do
        local player = PlayerPedId()
        local health = ((GetEntityHealth(player) - 100) / 2.6)
        local armor = (GetPedArmour(player) / 2.6)
        --print(health)
        SendNUIMessage({
            type = 'updateStatusHudmain',
            health = health,
            armour = armor,
        })
        Citizen.Wait(200)
    end
end)

RegisterNetEvent("wiro_hud:kemer")
AddEventHandler("wiro_hud:kemer", function(bool)
    SendNUIMessage({
        type = 'kemer',
        takili = bool,
    })
end)